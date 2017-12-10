<h1>给时空添加传感器</h1>
<p class="msg">用户在这里创建，给指定时空添加一个新的传感器</p>
<div class="fromone">
    <label>时空名称：</label>
    {{ space_time.title }}
</div>

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
    <label>传感器介绍说明：</label>
    {{ sensor.info }}
</div>

<div class="fromone">
    <label>传感器属性：</label>
    {% for key, attr in sensor_attr %}
    <div class="formBox">
        <div class="fromone">
            <label>{{ attr.title }}[{{ attr.attr_name }}]：</label>
            <input type="text" name="value" data-attrid="{{ attr.id }}" data-regexp="{{ attr.value }}" class="input" />
            <div class="msg2">{{ attr.info }}</div>
        </div>
    </div>
    {% endfor %}
</div>

<button id="create_btn" class="formBtn">确定</button>


{% script %} require("home:widget/add_sensor/add_sensor.js")( {{ sensor_id }}, {{ space_time_id }} ) {% endscript %}