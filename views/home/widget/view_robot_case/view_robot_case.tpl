<h1>给时空添加机器人</h1>
<p class="msg">用户在这里创建，给指定时空添加一个新的机器人</p>
<div class="fromone">
    <label>时空名称：</label>
    {{ space_time.title }}
</div>

<div class="fromone">
    <label>机器人名称：</label>
    {{ robot.title }}
</div>

<div class="fromone">
    <label>机器人唯一标识：</label>
    {{ robot.uri }}
</div>

<div class="fromone">
    <label>机器人通信协议：</label>
    {{ robot.stype }}
</div>

<div class="fromone">
    <label>机器人介绍说明：</label>
    {{ robot.info }}
</div>

<div class="fromone">
    <label>机器人实例别名：</label>
    <input type="text" id="alias" value="{{ robot_case.alias }}" class="input" />
</div>

<div class="fromone">
    <label>机器人实例说明：</label>
    <textarea id="case_info" class="textarea">{{ robot_case.case_info }}</textarea>
</div>

<div class="fromone">
    <label>机器人属性：</label>
    
    {% for key, attr in robot_attr %}
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
require("home:widget/view_robot_case/view_robot_case.js")( {{ robot_id }}, {{ space_time_id }}, {{ robot_case_id }} ) 
{% endscript %}