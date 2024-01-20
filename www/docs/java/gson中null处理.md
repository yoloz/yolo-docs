## 序列化 NULL

```java
// 默认会过滤NULL值，即toJson生成的字符串没有NULL值属性
Gson gs=new Gson()
// 下述方式序列化NULL值
Gson gs=new GsonBuilder().serializeNulls().create();
```

## NULL 转换为其他值

```java
GsonBuilder gsonBuilder=new GsonBuilder();
//遇到时间如何处理
gsonBuilder.setDateFormat("yyyy-MM-dd HH:mm:ss");
//遇到字符串如何处理
gsonBuilder.registerTypeAdapter(String.class,new StringNullAdapter());
Gson gs=gsonBuilder.create();
```

类 StringNullAdapter：

```java
import com.google.gson.TypeAdapter;
import com.google.gson.stream.JsonReader;
import com.google.gson.stream.JsonToken;
import com.google.gson.stream.JsonWriter;

import java.io.IOException;

public class StringNullAdapter extends TypeAdapter<String> {

    @Override
    public void write(JsonWriter jsonWriter, String s) throws IOException {
        //将对象转成json对象时，若有字段为null ，则转为""
        if (s==null){
            jsonWriter.value("");
            return;
        }
        jsonWriter.value(s);
    }

    @Override
    public String read(JsonReader jsonReader) throws IOException {
        //将json对象转成对象时，若有字段为null ，则转为""
        if (jsonReader.peek()== JsonToken.NULL){
            jsonReader.nextNull();
            return "";
        }
        return jsonReader.nextString();
    }
}
```
