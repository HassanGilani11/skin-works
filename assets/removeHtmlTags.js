<script>
function removeHtmlTags(input) {
    var doc = new DOMParser().parseFromString(input, 'text/html');
    return doc.body.textContent || "";
}

