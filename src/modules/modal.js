const modal = () => {
    const modal = document.querySelector('.popup');
    const buttons = document.querySelectorAll('.popup-btn');
    const closeeBtn = modal.querySelector('.popup-close');
    let opacity = 0;
    let position = -50;

    const animate = () => {
        opacity += 0.02;
        position += 1;

        modal.style.opacity = opacity;
        modal.style.transform = `translateY(${position}px)`;

        if (opacity < 1) {
            requestAnimationFrame(animate);
        }
    };

    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            modal.style.display = "block";

            if (window.innerWidth < 768) {
                modal.style.opacity = '1';
                modal.style.transform = 'translateY(0)';
                return;
            }

            opacity = 0;
            position = -50;

            modal.style.opacity = opacity;
            modal.style.transform = `translateY(${position}px)`;

            animate();
        })
    });

    closeeBtn.addEventListener("click", () => {
        modal.style.display = "none";
    })

}
export default modal