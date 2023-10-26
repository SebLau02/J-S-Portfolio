const parcours = document.querySelectorAll(".parcours div div ul li");
const themes = document.querySelectorAll(".theme-container article");
const formulaire = document.querySelectorAll(".contact-container > *");
const mainContent = document.querySelectorAll(
	".main-container, .footer-container",
);
const loader = document.querySelector(".loader-container");
const body = document.querySelector("body");

const parcoursScroll = () => {
	const observer = new IntersectionObserver((entries) => {
		entries.forEach((entry) => {
			if (entry.intersectionRatio === 1) {
				entry.target.style.transform = `translateX(0)`;
				entry.target.style.opacity = `1`;
			}
		});
	});
	parcours.forEach((element) => {
		observer.observe(element);
	});
};

const contactScroll = () => {
	const observer = new IntersectionObserver((entries) => {
		entries.forEach((entry) => {
			if (entry.intersectionRatio === 1) {
				entry.target.style.transform = `translateX(0)`;
				entry.target.style.opacity = `1`;
			}
		});
	});

	formulaire.forEach((element) => {
		observer.observe(element);
	});
};

const themeScroll = () => {
	const themeObserver = new IntersectionObserver((entries) => {
		entries.forEach((entry) => {
			if (entry.intersectionRatio === 1) {
				entry.target.style.transform = `scale(1)`;
			}
		});
	});

	themes.forEach((element) => {
		themeObserver.observe(element);
	});
};

window.addEventListener("scroll", () => {
	const scrolY = window.scrollY;

	const scrollRatio = Math.min(Math.max(0, 70 - scrollY / 50), 100);
	console.log(scrollRatio);

	body.style.backgroundPosition = `50% ${scrollRatio}%`;

	parcoursScroll();
	themeScroll();
	contactScroll();
});

window.addEventListener("load", () => {
	mainContent.forEach((element) => {
		element.classList.add("active");
	});
	loader.classList.add("active");
});
