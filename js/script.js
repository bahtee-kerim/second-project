'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const adv = document.querySelectorAll('.promo__adv img'),
        promoBg = document.querySelector('.promo__bg'),
        genre = promoBg.querySelector('.promo__genre'),
        movieList = document.querySelector('.promo__interactive-list'),
        addForm = document.querySelector('form.add'),
        addInput = addForm.querySelector('.adding__input'),
        checkbox = addForm.querySelector('[type="checkbox"]');

    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };

        addForm.addEventListener('submit', (event) => {
            event.preventDefault();
            let resInput = addInput.value;
            const favorite = checkbox.checked;

            if(resInput) {
                if(resInput.length > 21) {
                    resInput = `${resInput.slice(0, 21)}...`
                }

                if(favorite) {
                    console.log('добавляем любимый фильм');
                }

                movieDB.movies.push(resInput);
                sortArr(movieDB.movies);
                newFilms(movieDB.movies, movieList);
                event.target.reset();
                
            }
        })

    const deleteAdv = (arr) => {
        arr.forEach(item => {
            item.remove();
        });
    }

    const makeChanges = () => {

        genre.textContent = 'ДРАМА';

        promoBg.style.backgroundImage = 'url("/img/bg.jpg")';
    };


    const sortArr = (arr) => {
        arr.sort();
    };


    const newFilms = (films, parent) => {

        parent.innerHTML = '';

        sortArr(films);
        
        films.forEach((films, i) => {
            parent.innerHTML += `
    <li class="promo__interactive-item">${i + 1} ${films}
                            <div class="delete"></div>
                        </li>
    `;
        });

        document.querySelectorAll('.delete').forEach((btn, i) => {
            btn.addEventListener('click', () => {
                btn.parentElement.remove();
                movieDB.movies.splice(i, 1);
                newFilms(films, parent);
            });
        });
    }

    newFilms(movieDB.movies, movieList);
    deleteAdv(adv);
    makeChanges();
});






