[https://docs.oracle.com/javase/8/docs/technotes/guides/security/jgss/tutorials/Troubleshooting.html](https://docs.oracle.com/javase/8/docs/technotes/guides/security/jgss/tutorials/Troubleshooting.html)

A debugging mode can be enabled by setting the system property `sun.security.krb5.debug` to "true". This setting allows you to follow the program's execution of the Kerberos V5 protocol.

## Configurable Kerberos Settings:

The Kerberos Key Distribution Center (KDC) name and realm settings are provided in the Kerberos configuration file or via the system properties `java.security.krb5.kdx` and `java.security.krb5.realm`. In previous releases, changes to the Kerberos configuration values would only take effect when an application was restarted.

Starting from the JDK 1.4.2 release, a new boolean option `refreshKrb5Config` can be specified in the entry for `Krb5LoginModule` in the JAAS configuration file. If this option is set to `true`, the configuration values will be refreshed before the login method of the `Krb5LoginModule` is called.
:::note
When switching Kerberos configurations, it is REQUIRED that refreshKrb5Config should be set to true. Failure to set this value can lead to unexpected results.
:::

## java.lang.SecurityException at javax.security.auth.login.Configuration.getConfiguration

Cause: There was a problem processing the JAAS login configuration file, possibly due to a syntax error in the file.

Solution: Check the configuration file carefully for errors. See [JAAS Login Configuration File](https://docs.oracle.com/javase/8/docs/technotes/guides/security/jgss/tutorials/LoginConfigFile.html) for information about the syntax required in the login configuration file.

## javax.security.auth.login.LoginException: KrbException: Pre-authentication information was invalid (24) - Preauthentication failed

Cause 1: The password entered is incorrect.

Solution 1: Verify the password.

Cause 2: If you are using the keytab to get the key (e.g., by setting the useKeyTab option to true in the Krb5LoginModule entry in the JAAS login configuration file), then the key might have changed since you updated the keytab.

Solution 2: Consult your Kerberos documentation to generate a new keytab and use that keytab.

Cause 3: Clock skew - If the time on the KDC and on the client differ significanlty (typically 5 minutes), this error can be returned.

Solution 3: Synchronize the clocks (or have a system administrator do so).

Cause 4: The Kerberos realm name is not all uppercase.

Solution 4: Make the Kerberos realm name all uppercase. Note: It is recommended to have all uppercase realm names. For details, refer to the [Naming Conventions for the Realm Names and Hostnames](https://docs.oracle.com/javase/8/docs/technotes/guides/security/jgss/tutorials/KerberosReq.html#realmnamereqs) section of this tutorial.

## GSSException: No valid credentials provided (Mechanism level: Attempt to obtain new INITIATE credentials failed! (null)) . . . Caused by: javax.security.auth.login.LoginException: Clock skew too great

Cause: Kerberos requires the time on the KDC and on the client to be loosely synchronized. (The default is within 5 minutes.) If that's not the case, you will get this error.

Solution: Synchronize the clocks (or have a system administrator do so).

## javax.security.auth.login.LoginException: KrbException: Null realm name (601) - default realm not specified

Cause: The default realm is not specified in the Kerberos configuration file krb5.conf (if used), provided as a part of the user name, or specified via the java.security.krb5.realm system property.

Solution: Verify that your Kerberos configuration file (if used) contains an entry specifying the default realm, or directly specify it by setting the value of the java.security.krb5.realm system property and/or including it in your user name when authenticating using Kerberos.

## javax.security.auth.login.LoginException: java.net.SocketTimeoutException: Receive timed out

Solution: Verify that the Kerberos KDC is up and running.

## GSSException: No valid credentials provided (Mechanism level: Failed to find any Kerberos Ticket)

Cause: This may occur if no valid Kerberos credentials are obtained. In particular, this occurs if you want the underlying mechanism to obtain credentials but you forgot to indicate this by setting the javax.security.auth.useSubjectCredsOnly system property value to false (for example via `-Djavax.security.auth.useSubjectCredsOnly=false` in your execution command).

Solution: Be sure to set the `javax.security.auth.useSubjectCredsOnly` system property value to false if you want the underlying mechanism to obtain credentials, rather than your application or a wrapper program (such as the Login utility used by some of the tutorials) performing authentication using JAAS.

## javax.security.auth.login.LoginException: Could not load configuration file `<krb5.conf>` (No such file or directory)

Cause: The tutorials' sample execution commands specify the default Kerberos realm and KDC by setting values for the `java.security.krb5.realm` and `java.security.krb5.kdc` system properties. If you like, you can instead have a `krb5.conf` Kerberos configuration file used. Such a file includes information about what the default realm and KDC are. To use a `krb5.conf` file, you either set the system property `java.security.krb5.conf` (instead of the realm and kdc properties) to specify the location of the file or you don't set any of these properties and therefore an attempt is made to locate the krb5.conf file in a default location. You will get the error "`Could not load configuration file <krb5.conf>(No such file or directory)`" if the file could not be found.

Solution: Verify that the Kerberos configuration file krb5.conf is available and readable. Check [Kerberos Requirements](https://docs.oracle.com/javase/8/docs/technotes/guides/security/jgss/tutorials/KerberosReq.html) for information about how to specify the location of the krb5.conf file and where such a file is searched for by default if you don't explicitly indicate the location.

## javax.security.auth.login.LoginException: KrbException: KDC has no support for encryption type (14) - KDC has no support for encryption type

Cause 1: Your KDC does not support the encryption type requested.

Solution 1: Sun's implementation of Kerberos supports the following encryption types: des-cbc-md5, des-cbc-crc and des3-cbc-sha1.

Applications can select the desired encryption type by specifying following tags in the Kerberos Configuration file krb5.conf:

```log
[libdefaults]
default_tkt_enctypes = des-cbc-md5 des-cbc-crc des3-cbc-sha1
default_tgs_enctypes = des-cbc-md5 des-cbc-crc des3-cbc-sha1
permitted_enctypes = des-cbc-md5 des-cbc-crc des3-cbc-sha1
```

If not specified, the default value is:`des-cbc-md5 des-cbc-crc des3-cbc-sha1`

Cause 2: This exception is thrown when using native ticket cache on some Windows platforms. Microsoft has added a new feature in which they no longer export the session keys for Ticket-Granting Tickets (TGTs). As a result, the native TGT obtained on Windows has an "empty" session key and null EType. The effected platforms include: Windows Server 2003, Windows 2000 Server Service Pack 4 (SP4) and Windows XP SP2.

Solution 2: You need to update the Windows registry to disable this new feature. The registry key allowtgtsessionkey should be added--and set correctly--to allow session keys to be sent in the Kerberos Ticket-Granting Ticket.

On the Windows Server 2003 and Windows 2000 SP4, here is the required registry setting:

```long
HKEY_LOCAL_MACHINE\System\CurrentControlSet\Control\Lsa\Kerberos\Parameters
Value Name: allowtgtsessionkey
Value Type: REG_DWORD
Value: 0x01 ( default is 0 )
```

By default, the value is 0; setting it to "0x01" allows a session key to be included in the TGT.
Here is the location of the registry setting on Windows XP SP2:

```log
HKEY_LOCAL_MACHINE\System\CurrentControlSet\Control\Lsa\Kerberos\
Value Name: allowtgtsessionkey
Value Type: REG_DWORD
Value: 0x01
```

## KDC reply did not match expectations

Cause: The KDC sent a response that cannot be understood by the client.

Solution: Verify that you have set correctly all the krb5.conf file configuration parameters and consult your KDC vendor's guide.
