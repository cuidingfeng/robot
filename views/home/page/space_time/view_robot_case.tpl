{% extends 'home:page/layout.tpl' %}

{% block content %}
     <div id="pages-container">
        {% widget "home:widget/view_robot_case/view_robot_case.tpl"%}
     </div>
{% require "home:page/space_time/view_robot_case.tpl" %}{% endblock %}