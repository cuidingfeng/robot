{% extends 'home:page/layout.tpl' %}

{% block content %}
     <div id="pages-container">
        {% widget "home:widget/view_sensor_case/view_sensor_case.tpl"%}
     </div>
{% require "home:page/space_time/view_sensor_case.tpl" %}{% endblock %}