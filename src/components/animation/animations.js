import gsap from "gsap"

export const animatePageIn = () => {
  var elements = document.querySelectorAll('[id^="page-element-"]');
  if (elements?.length > 0) {
    var elementsArray = Array.prototype.slice.call(elements, 0);
    const sorted = elementsArray.sort((a,b) => {
      var textA = a.id.toUpperCase();
      var textB = b.id.toUpperCase();
      return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
    })
    let counter = 0


    const interval = setInterval(() => {
      if (counter >= elements.length) {
        clearInterval(interval);
        counter = 0
      } else {
        const tl1 = gsap.timeline()
        tl1.set(sorted[counter], {
          opacity: 0,
          scale: 1.1,
        }).to(sorted[counter], {
          opacity: 1,
          scale: 1,
          duration: 0.25,
        })
        counter++;
      }
    }, 100);
  }else {
    setTimeout(() => {
      animatePageIn()
    }, 200);
  }
}

export const animatePageOut = (href, router) => {
  var elements = document.querySelectorAll('[id^="page-element-"]');

  if (elements?.length > 0) {
    var elementsArray = Array.prototype.slice.call(elements, 0);
    const sorted = elementsArray.sort((a,b) => {
      var textA = a.id.toUpperCase();
      var textB = b.id.toUpperCase();
      return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
    })
    let counter = 0

    const interval = setInterval(() => {
      if (counter >= elements.length) {
        clearInterval(interval);
        counter = 0
        router.push(href)
      } else {
        const tl1 = gsap.timeline()
        tl1.set(sorted[counter], {
          opacity: 1,
          scale: 1,
        }).to(sorted[counter], {
          opacity: 0,
          scale: 1.1,
          duration: 0.25,
          onComplete: () => {
            if (counter === elements.length - 1) {
              router.push(href)
            }
          }
        })
        counter++;
      }
    }, 100);
  } else {
      router.push(href)
  }
}