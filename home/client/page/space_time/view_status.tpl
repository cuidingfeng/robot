{% extends 'home:page/layout.tpl' %}

{% block content %}
     <div id="pages-container">
        {% widget "home:widget/view_status/view_status.tpl"%}
     </div>
{% endblock %}