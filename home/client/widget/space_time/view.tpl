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
        <a href="/home/space_time/view_sensor_case?scid={{$case.scid}}" target="_blank">编辑</a>
        <a href="/home/space_time/del_sensor?scid={{$case.scid}}" confirm="true" ajax="true">删除</a>
    </div>
</div>
{% endfor %}


<h2>已添加的机器人</h2>
<a href="./add_robot?space_time_id={{ space_time.id }}">添加新机器人</a>

{% for key, $robot_case in robot_case %}
<div class="formBox">
    <div class="fromone">
        <label>机器人实例ID：</label>
        <a href="/home/space_time/view_robot_case?rcid={{$robot_case.rcid}}" target="_blank">{{ $robot_case.alias }}</a>
    </div>
    <div class="fromone">
        <label>机器人名称：</label>
        <a href="/home/robot/view?id={{$robot_case.rid}}" target="_blank">{{ $robot_case.title }}</a>
    </div>
    <div class="fromone">
        <label>机器人标识：</label>
        {{ $robot_case.robotId }}
    </div>
    <div class="fromone">
        <label>机器人协议：</label>
        {{ $robot_case.stype }}
    </div>
    
    <div>
        <a href="./del_robot?rcid={{$robot_case.rcid}}" confirm="true" ajax="true">删除</a>
    </div>
</div>
{% endfor %}

<h2>状态机</h2>
<a href="./status?space_time_id={{ space_time.id }}" target="_blank">添加新状态</a>

<table class="list">
    <tr>
        <th>id</th>
        <th>名称</th>
        <th>标识</th>
        <th>操作</th>
    </tr>
{% for key, $status in statusList %}
<tr>
    <td>{{ $status.id }}</td>
    <td>{{ $status.title }}</td>
    <td>{{ $status.name }}</td>
    <td>
        <a href="./status?space_time_id={{space_time.id}}&status_id={{$status.id}}" target="_blank">查看</a>
        <a href="./del_status?status_id={{$status.id}}" confirm="true" ajax="true">删除</a>
    </td>
</tr>
{% endfor %} 
</table>

<h2>所有规则</h2>
<a href="./rule?space_time_id={{ space_time.id }}">添加新规则</a>


{% script %} require("./view")( {{ space_time.id }} ) {% endscript %}