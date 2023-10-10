`NoClassDefFoundError` 总的来讲有两种情况，类文件不存在，或是类初始化错误:

- 如果无法找到类文件，错误信息为:`java.lang.NoClassDefFoundError: {类名}`；
- 如果类文件初始化错误，错误信息则如前文所提，为:`NoClassDefFoundError: Could not initialize class {类名}`，这通常由类的静态成员或静态初始化语句块引起；
