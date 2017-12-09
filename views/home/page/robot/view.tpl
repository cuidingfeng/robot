{% extends 'home:page/layout.tpl' %}

{% block content %}
     <div id="pages-container">
        {% widget "home:widget/robot/view.tpl"%}
     </div>
{% require "home:page/robot/view.tpl" %}{% endblock %}