{% extends 'home:page/layout.tpl' %}

{% block content %}
     <div id="pages-container">
        {% widget "home:widget/add_sensor/add_sensor.tpl"%}
     </div>
{% require "home:page/space_time/add_sensor.tpl" %}{% endblock %}