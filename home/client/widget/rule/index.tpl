<h1>给时空中央处理器添加规则</h1>
<p class="msg">用户在这里创建，给指定时空的中央处理器设置规则</p>
<div class="fromone">
    <label>时空名称：</label>
    <a href="/home/space_time/view?id={{ space_time.id }}">{{ space_time.title }}</a>
</div>

<div class="fromone">
    <label>添加一条新规则 -</label>
    <div>事件：<select id="eventType">
        <option value="">请选择</option>
        <option value="sensor">传感器事件发生</option>
        <option value="status">状态机状态改变</option>
        <option value="robot">机器人执行结果</option>
    </select><span id="eventOther"></span></div>
    <div>逻辑代码：</div>
    <textarea class="textarea"></textarea>
</div>
<button class="btn">添加规则</button>

{% script %} require("./index")({{ space_time.id }}); {% endscript %}