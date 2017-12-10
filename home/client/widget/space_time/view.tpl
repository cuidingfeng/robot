<h1>时空详情</h1>
<p class="msg">用户在这里查看，配置时空需要的传感器、机器人，和规则</p>

<div class="fromone">
<label>时空名称：</label>
{{ space_time.title }}
</div>

<div class="fromone">
<label>时空id：</label>
{{ space_time.id }}
</div>

<div class="fromone">
<label>状态：</label>
{{ util.space_time_status(space_time.status) }}
</div>

<div class="fromone">
<label>时空介绍说明：</label>
{{ space_time.info }}
</div>



<h2>已添加的传感器</h2>
<a href="./add_sensor?space_time_id={{ space_time.id }}">添加新传感器</a>

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
<textarea id="event_value" class="textarea"></textarea>
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

{% script %}
require("./view")( {{ space_time.id }} )
{% endscript %}