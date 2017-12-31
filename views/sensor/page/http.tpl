{% extends 'sensor:page/layout.tpl' %}

{% block content %}
     <div id="pages-container">
        {% widget "sensor:widget/http/http.tpl"%}
     </div>
{% require "sensor:page/http.tpl" %}{% endblock %}