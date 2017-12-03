<h1>任务时空</h1>

<div class="flex">
    <div class="leftbox">
        <h2>传感器列表</h2>
        <ol>
            <li>
                <div>名称：时间</div>
                <div>id: time1</div>
                <div>属性：<br>
                    时间戳[timestamp] <br>
                    分钟[minute]
                </div>
            </li>
        </ol>
        <button>添加传感器</button>


        <h2>机器人列表</h2>
        <ol>
            <li>打印 - print1</li>
        </ol>
        <button>添加机器人</button>
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