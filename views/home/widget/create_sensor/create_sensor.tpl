
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
<label>传感器通信协议：</label>
<select class="select" id="stype">
<option value="local">平台内部</option>
<option value="http">http</option>
<option value="Scheme">Scheme</option>
<option value="server">操作系统通知</option>
</select>
</div>

<button id="create_sensor">创建</button>

<div class="fromone">
<label>通信URI：</label>
http://127.0.0.1:8000/sensor/<span id="sensorid"></span>
</div>
<label>密匙：</label>
secretKey=<span id="secretkey"></span>
</div>

<h2>支持的事件</h2>

<div class="fromone">
<label>事件名称：</label>
<input type="text" name="title" class="input" />
</div>

<div class="fromone">
<label>事件标识：</label>
<input type="text" name="uri" class="input" />
</div>

<div class="fromone">
<label>事件数据格式：</label>
<input type="text" name="uri" class="input" />
</div>

<button>添加事件</button>


<button id="start">开启任务</button>
<button id="pause">暂停任务</button>
<button id="end">结束任务</button>


{% script %}
require("home:widget/create_sensor/create_sensor.js");
{% endscript %}