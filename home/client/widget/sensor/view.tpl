<h1>传感器详情</h1>
<p class="msg">传感器开发者在这里查看，设置传感器需要用户填的属性和支持的事件</p>

<div class="fromone">
    <label>传感器名称：</label>
    {{ sensor.title }}
</div>

<div class="fromone">
    <label>传感器唯一标识：</label>
    {{ sensor.uri }}
</div>

<div class="fromone">
    <label>传感器通信协议：</label>
    {{ sensor.stype }}
</div>

<div class="fromone">
    <label>传感器初始实例的地址：</label>
    {{ sensor.init_url }}
</div>

<div class="fromone">
    <label>传感器介绍说明：</label>
    {{ sensor.info }}
</div>

<div class="fromone">
    <label>通信URI：</label>
    http://127.0.0.1:8000/sensor/{{ sensor.id }}
</div>

<div class="fromone">
    <label>密匙：</label>
    secretKey={{ sensor.secretkey }}
</div>


<h2>需要的属性</h2>

<div class="fromone">
    <label>属性名称：</label>
    <input type="text" name="title" id="attr_title" class="input" />
</div>

<div class="fromone">
    <label>属性标识：</label>
    <input type="text" name="attr_name" id="attr_name" class="input" />
</div>

<div class="fromone">
    <label>属性说明：</label>
    <textarea id="attr_info" class="textarea"></textarea>
</div>

<div class="fromone">
    <label>属性值的格式，正则：</label>
    <input type="text" name="value" id="attr_value" class="input" />
</div>

<button class="formBtn" id="addAttr">添加属性</button>

<table class="list">
    <tr>
        <th>名称</th>
        <th>标识</th>
        <th>格式</th>
        <th>说明</th>
        <th>操作</th>
    </tr>
    {% for key, attr in attrs %}
    <tr>
        <td>{{ attr.title }}</td>
        <td>{{ attr.attr_name }}</td>
        <td>{{ attr.value }}</td>
        <td>{{ attr.info }}</td>
        <td>
            <a href="#">编辑</a>
            <a href="./view_attr_del?id={{attr.id}}" ajax="true">删除</a>
        </td>
    </tr>
    {% endfor %}
</table>


<h2>支持的事件</h2>

<div class="fromone">
    <label>事件名称：</label>
    <input type="text" id="event_title" class="input" />
</div>

<div class="fromone">
    <label>事件标识：</label>
    <input type="text" id="event_name" class="input" />
</div>

<div class="fromone">
    <label>数据格式：</label>
    <textarea id="event_value" class="textarea">
[
{
    "keyname": "time",
    "type": "Number",
    "regexp": "\d{13}",
    "default": 1513440060452,
    "info": "发生时间的时间戳，13位数字"
},
{
    "keyname": "time2",
    "type": "Object",
    "attr": [{
        "keyname": "hour",
        "type": "Number",
        "regexp": "\d{1,2}",
        "default": 12,
        "info": "小时字段"
    }],
    "info": "发生时间的对象"
},
{
    "keyname": "time3",
    "type": "Array",
    "child": {
        "type": "String",
        "regexp": "\w{1,2}",
        "default": 12,
        "info": "小时字段"
    },
    "info": "发生时间的对象"
}
]
</textarea>
</div>

<div class="fromone">
    <label>事件说明：</label>
    <textarea id="event_info" class="textarea"></textarea>
</div>

<button class="formBtn" id="addEvent">添加事件</button>

<table class="list">
    <tr>
        <th>名称</th>
        <th>标识</th>
        <th>格式</th>
        <th>说明</th>
        <th>操作</th>
    </tr>
    {% for key, event in events %}
    <tr>
        <td>{{ event.title }}</td>
        <td>{{ event.event_name }}</td>
        <td>{{ event.value }}</td>
        <td>{{ event.info }}</td>
        <td>
            <a href="#">编辑</a>
            <a href="./view_event_del?id={{event.id}}" ajax="true">删除</a>
        </td>
    </tr>
    {% endfor %}
</table>

{% script %} require("view")( {{ sensor.id }} ) {% endscript %}