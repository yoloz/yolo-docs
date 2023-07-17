## json.Unmarshal 解码

```go
func HandleUse(w http.ResponseWriter, r *http.Request) {
    var u Use
    data, err := ioutil.ReadAll(r.Body)
    if err != nil {
        w.WriteHeader(http.StatusBadRequest)
        return
    }
    if err := json.Unmarshal(data, &u); err != nil {
        w.WriteHeader(http.StatusInternalServerError)
        return
    }
    w.WriteHeader(http.StatusOK)
    fmt.Fprintf(w, "姓名：%s，年龄：%d", u.Name, u.Age)

}
```

## json.NewDecoder 解码

```go
func HandleUse(w http.ResponseWriter, r *http.Request) {
    var u Use
    if err := json.NewDecoder(r.Body).Decode(&u); err != nil {
        w.WriteHeader(http.StatusInternalServerError)
        return
    }
    w.WriteHeader(http.StatusOK)
    fmt.Fprintf(w, "姓名：%s，年龄：%d", u.Name, u.Age)

}
```

:::info

- json.NewDecoder 是从一个流里面直接进行解码，代码精干
- json.Unmarshal 是从已存在与内存中的 json 进行解码
- 相对于解码，json.NewEncoder 进行大 JSON 的编码比 json.marshal 性能高，因为内部使用 pool
- json.NewDecoder 用于 http 连接与 socket 连接的读取与写入，或者文件读取
- json.Unmarshal 用于直接是 byte 的输入

:::

## 整数解码为浮点数

使用 Golang 解析 JSON  格式数据时，若以 `interface{}` 接收数字成员，则会按照下列规则进行解析（数字会被解析为 float64 类型）：
:::info

- bool, for JSON booleans
- float64, for JSON numbers
- string, for JSON strings
- []interface{}, for JSON arrays
- map[string]interface{}, for JSON objects
- nil for JSON null

:::

如果要转换为整型，可用强制类型转换：`int( a["id"].(float64) )`将 interface{} 类型的 “id” 键申明为 float64 类型，再转换为 int 型
