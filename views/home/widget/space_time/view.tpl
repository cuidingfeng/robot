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


{% for key, $case in sensor_case %}
<div class="formBox">
    <div class="fromone">
        <label>传感器实例ID：</label>
        <a href="/home/space_time/view_sensor_case?scid={{$case.scid}}" target="_blank">{{ $case.scid }}</a>
    </div>
    <div class="fromone">
        <label>传感器名称：</label>
        <a href="/home/sensor/view?id={{$case.sid}}" target="_blank">{{ $case.title }}</a>
    </div>
    <div class="fromone">
        <label>传感器标识：</label>
        {{ $case.uri }}
    </div>
    <div class="fromone">
        <label>传感器协议：</label>
        {{ $case.stype }}
    </div>
    <div class="fromone">
        <label>属性：</label>
        {% for key, $attr in sensor_case_attr %} 
            {% if $attr.scid == $case.scid %}
            <div class="fromone2">
                <label title="{{ $attr.info }}">{{ $attr.title }} [{{ $attr.attr_name }}]：</label>
                {{ $attr.case_value }}
            </div>
            {% endif %} 
        {% endfor %}
    </div>
    <div>
        <a href="#">编辑</a>
        <a href="./view_attr_del?id={{$case.id}}" ajax="true">删除</a>
    </div>
</div>
{% endfor %}


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

{% script %} require("home:widget/space_time/view.js")( {{ space_time.id }} ) {% endscript %}