<h1>智能生活机器</h1>

<div class="flex">
    <div class="leftbox">
        <h2>传感器</h2>
        <a href="./sensor/list">所有传感器</a>
        <a href="./sensor/create">创建传感器</a>

        <h2>机器人</h2>
        <a href="./robot/list">所有机器人</a>
        <a href="./robot/create">创建机器人</a>

        <h2>时空</h2>
        <a href="./space_time/list">所有时空</a>
        <a href="./space_time/create">创建时空</a>

    </div>

    <div class="rightbox">
        <h2>任务列表</h2>
        <div class="rw">
            <h3>每个整5分钟打印hello</h3>
            <div><strong>条件：</strong></div>
            <div>time1.minute % 5 = 0</div>
        </div>

    </div>

</div>

{% script %} require("timespace"); {% endscript %}