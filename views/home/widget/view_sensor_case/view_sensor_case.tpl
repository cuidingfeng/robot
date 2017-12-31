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
    <label>传感器实例别名：</label>
    <input type="text" id="alias" value="{{ sensor_case.alias }}" class="input" />
</div>

<div class="fromone">
    <label>传感器实例说明：</label>
    <textarea id="case_info" class="textarea">{{ sensor_case.case_info }}</textarea>
</div>

<div class="fromone">
    <label>传感器属性：</label>
    
    {% for key, attr in sensor_attr %}
    <div class="formBox">
        <div class="fromone">
            <label>{{ attr.title }}[{{ attr.attr_name }}]：</label>
            <input type="text" data-attrid="{{ attr.id }}" value="{{ attr.case_value }}" data-regexp="{{ attr.value }}" class="input caseAttr" />
            <div class="msg2">{{ attr.info }}</div>
        </div>
    </div>
    {% endfor %}
</div>

<button id="create_btn" class="formBtn" data-from="{{ from }}">确定</button>


{% script %} 
require("home:widget/view_sensor_case/view_sensor_case.js")( {{ sensor_id }}, {{ space_time_id }}, {{ sensor_case_id }} ) 
{% endscript %}