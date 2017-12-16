{% extends 'home:page/layout.tpl' %}

{% block content %}
     <div id="pages-container">
        {% widget "home:widget/view_status/view_status.tpl"%}
     </div>
{% require "home:page/space_time/view_status.tpl" %}{% endblock %}