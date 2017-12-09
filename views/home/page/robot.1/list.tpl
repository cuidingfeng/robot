{% extends 'home:page/layout.tpl' %}

{% block content %}
     <div id="pages-container">
        {% widget "home:widget/robot/list.tpl"%}
     </div>
{% require "home:page/robot.1/list.tpl" %}{% endblock %}