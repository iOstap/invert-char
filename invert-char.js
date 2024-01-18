<script>
document.addEventListener('DOMContentLoaded', function () {
    const textBlocks = document.querySelectorAll('.text-wagon');
    const circle1 = document.querySelector('.sticky-circle_element');
    const circle2 = document.querySelector('.sticky-circle_element-2');

    function handleTextInCircle(textElement, circleElement, circleColor) {
        const rectText = textElement.getBoundingClientRect();
        const rectCircle = circleElement.getBoundingClientRect();

        // Check if there is an intersection
        if (
            rectCircle.top < rectText.bottom &&
            rectCircle.bottom > rectText.top &&
            rectCircle.left < rectText.right &&
            rectCircle.right > rectText.left
        ) {
            const textContent = textElement.innerText;
            const spannedText = textContent.split('').map((char, index) => {
                return `<span class="inverted-char">${char}</span>`;
            }).join('');

            // Set the innerHTML of the text element
            textElement.innerHTML = spannedText;

            const spanList = textElement.querySelectorAll('.inverted-char');

            spanList.forEach((span, index) => {
                const charRect = span.getBoundingClientRect();

                // Check if the character's position is inside the circle
                if (
                    charRect.top < rectCircle.bottom &&
                    charRect.bottom > rectCircle.top &&
                    charRect.left < rectCircle.right &&
                    charRect.right > rectCircle.left
                ) {
                    span.style.color = circleColor;
                } else {
                    span.style.color = ''; // Reset text color
                }
            });
        } else {
            // Reset the text to its original state
            textElement.innerHTML = textElement.innerText;
        }
    }

    window.addEventListener('scroll', function () {
        // Handle the first circle for each text block
        textBlocks.forEach(textBlock => {
            handleTextInCircle(textBlock, circle1, '#F0F1F9');
        });

        // Handle the second circle for each text block
        textBlocks.forEach(textBlock => {
            handleTextInCircle(textBlock, circle2, '#0075FF');
        });
    });
});
</script>
