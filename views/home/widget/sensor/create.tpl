
<h1>创建传感器</h1>
<p class="msg">传感器开发者在这里创建，把传感器添加到平台中</p>
<div class="fromone">
<label>传感器名称：</label>
<input type="text" id="title" class="input" />
</div>

<div class="fromone">
<label>传感器唯一标识：</label>
<input type="text" id="uri" class="input" />
</div>

<div class="fromone">
<label>传感器介绍说明：</label>
<textarea id="info" class="textarea"></textarea>
</div>

<div class="fromone">
<label>传感器通信协议：</label>
<select class="select" id="stype">
<option value="local">平台内部</option>
<option value="http">http</option>
<option value="Scheme">Scheme</option>
<option value="server">操作系统通知</option>
</select>
</div>

<button id="create_sensor" class="formBtn">创建</button>

<div class="fromone">
<label>通信URI：</label>
http://127.0.0.1:8000/sensor/<span id="sensorid"></span>
</div>
<div class="fromone">
<label>密匙：</label>
secretKey=<span id="secretkey"></span>
</div>

<div class="fromone" id="meBtns">
<a href="./list" class="formBtn">所有传感器</a>
</div>

<button id="start" class="formBtn">开启任务</button>
<button id="pause" class="formBtn">暂停任务</button>
<button id="end" class="formBtn">结束任务</button>


{% script %}
require("home:widget/sensor/create.js");
{% endscript %}