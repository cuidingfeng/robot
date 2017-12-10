{% extends 'home:page/layout.tpl' %}

{% block content %}
     <div id="pages-container">
        {% widget "home:widget/space_time/create.tpl"%}
     </div>
{% require "home:page/space_time/create.1.tpl" %}{% endblock %}