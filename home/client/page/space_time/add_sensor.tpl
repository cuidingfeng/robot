{% extends 'home:page/layout.tpl' %}

{% block content %}
     <div id="pages-container">
        {% widget "home:widget/add_sensor/add_sensor.tpl"%}
     </div>
{% endblock %}