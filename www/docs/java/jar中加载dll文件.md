库文件的加载必须是全路径的`.so`文件不能使用相对路径，一般把`.so`文件从`jar`中取出来放到临时目录中，然后再加载:

```java
// `.so`文件放入`resources`目录下
public interface JNINativeI extends Library {

    JNINativeI INSTANCE = Native.load(extractLibrary(), JNINativeI.class);

    JNIMsg.ByValue TestInfo();

    static String extractLibrary() {
        try {
            File file = File.createTempFile("libvms", Platform.isWindows() ? ".dll" : ".so");
            if (file.exists()) {
                String fileName = Platform.isWindows() ? "libvms.dll" : "libvms.so";
                InputStream link = (JNINativeI.class.getResourceAsStream("/" + fileName));
                if (link == null) {
                    throw new IOException("jar resources file[libvms] is not exit.");
                }
                Files.copy(
                        link,
                        file.getAbsoluteFile().toPath(),
                        java.nio.file.StandardCopyOption.REPLACE_EXISTING);
                return file.getAbsoluteFile().toPath().toString();
            }
            throw new IOException("file [" + file.getPath() + "] not exit.");
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
    }
}
```
