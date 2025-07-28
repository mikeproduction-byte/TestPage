const priceElement = document.getElementById('price');
        const prices = ['S/250', '$69.9'];
        let currentPriceIndex = 0;

        function typeWriter(text, i, fnCallback) {
            if (i < text.length) {
                priceElement.innerHTML = text.substring(0, i + 1);
                setTimeout(function() {
                    typeWriter(text, i + 1, fnCallback)
                }, 100);
            } else if (typeof fnCallback == 'function') {
                setTimeout(fnCallback, 2000);
            }
        }

        function deleteWriter(fnCallback) {
            let text = priceElement.innerHTML;
            let i = text.length - 1;

            function deleteChar() {
                if (i >= 0) {
                    priceElement.innerHTML = text.substring(0, i);
                    i--;
                    setTimeout(deleteChar, 50);
                } else if (typeof fnCallback == 'function') {
                    fnCallback();
                }
            }
            deleteChar();
        }

        function startEffect() {
            deleteWriter(function() {
                currentPriceIndex = (currentPriceIndex + 1) % prices.length;
                typeWriter(prices[currentPriceIndex], 0, startEffect);
            });
        }

        
        setTimeout(startEffect, 2000);