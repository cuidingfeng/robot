{% extends 'home:page/layout.tpl' %}

{% block content %}
     <div id="pages-container">
        {% widget "home:widget/create_sensor/create_sensor.tpl"%}
     </div>
{% require "home:page/sensor/create_sensor.tpl" %}{% endblock %}