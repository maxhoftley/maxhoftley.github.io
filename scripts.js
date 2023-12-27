drinks_list =
    [
        {
            id: "recipe1",
            en_title: "Whiskey & Coke",
            ua_title: "Віскі з колою",
            imageUrl: "https://us.inshaker.com/uploads/cocktail/hires/261/1557247687-Whiskey-Cola__highres1.jpg",
            en_description: "Ingredients:<br>- 60 ml whiskey<br>- Coca-Cola, chilled, to top (120 - 200 ml, to taste)<br>- Garnish: lemon twist (optional)<br><br>As the drink’s name implies, its two components are Coca-Cola or any cola of your choice (though Coke’s relatively high acidity renders it a particularly good match against the liquor), plus any whiskey, though Jack Daniel’s seems to be by far the most popular option—which is then called, yes, a Jack & Coke or even a Lemmy, for the Motörhead frontman notoriously fond of the drink.",
            ua_description: "Інгредієнти:<br>- 60 мл віскі<br>- Кока-кола, охолоджена, до верху (120 - 200 мл, за смаком)<br>- Прикраса: лимонний твіст (за бажанням)<br><br>Як випливає з назви напою, його двома компонентами є кока-кола або будь-яка інша кола на ваш вибір (хоча відносно висока кислотність кока-коли робить її особливо вдалим поєднанням з лікером), а також будь-яке віскі, хоча найпопулярнішим варіантом, вочевидь, є Jack Daniel's - тоді він називається, так, Jack & Coke або навіть Lemmy, на честь фронтмена Motörhead, який, як відомо, дуже любив цей напій.",
            recipe: "Крок за кроком: <br> - Додайте віскі в подвійну склянку з льодом на один великий кубик льоду або в склянку з льодом, наповнену льодом.<br>- Зверху додайте колу і коротко та обережно перемішайте, щоб змішати.<br>- За бажанням прикрасьте коктейль лимонною часточкою.",
        },
        {
            id: "recipe2",
            en_title: "Blue Lagoon",
            ua_title: "Блакитнa лагунa",
            imageUrl: "https://pngimg.com/uploads/cocktail/cocktail_PNG138.png",
            en_description: "Ingredients: - 30 ml vodka<br>- 30 ml blue curaçao<br>- 120 ml lemonade<br>- Garnish: lemon wheel<br>- Garnish: maraschino cherry<br><br>It’s believed that the Blue Lagoon was created by Andy MacElhone, the son of famed bartender Harry MacElhone, at Harry’s New York Bar in Paris in the 1960s or early 1970s. So, the drink predates the 1980 movie of the same name. Vodka provides a sturdy base, while the blue curaçao—a Caribbean liqueur made using the dried peel of the Laraha citrus fruit and then colored blue—adds sweet, zesty notes. The lemonade lengthens the drink, lends additional tartness and keeps the beverage quaffable.",
            ua_description: "Інгредієнти:<br>- 30 мл горілки<br>- 30 мл блакитного кюрасао<br>- 120 мл лимонаду<br>- Прикраса: лимонне колесо<br>- Прикраса: вишня мараскіно<br><br>Вважається, що \"Блакитну лагуну\" створив Енді Макелон, син відомого бармена Гаррі Макелона, у паризькому барі Harry's New York у 1960-х або на початку 1970-х років. Таким чином, напій з'явився ще до виходу однойменного фільму 1980 року. Горілка створює міцну основу, а блакитний кюрасао - карибський лікер, виготовлений з використанням висушеної шкірки цитрусових Лараха, а потім пофарбований у блакитний колір - додає солодких, пікантних ноток. Лимонад подовжує напій, надає йому додаткової терпкості та робить його легко п'янким.",
            recipe: "Етапи приготування:<br>- Додайте горілку, блакитний кюрасао та лимонад у шейкер з льодом і збовтайте до повного охолодження.<br>- Процідити в ураганну склянку з колотим льодом.<br>- Прикрасити лимонним кружечком та вишнею мараскіно.",
        },
    ];

let current_lang = "en";

function generateRecipe(jsonData) {
    // Create a unique ID for the recipe container
    const recipeId = `${jsonData.id}`;

    // Create the recipe container
    const recipeContainer = document.createElement('article');
    recipeContainer.className = 'recipe-container';
    recipeContainer.id = recipeId;

    // Create the recipe bar
    const recipeBar = document.createElement('div');
    recipeBar.className = 'recipe-bar';
    recipeBar.onclick = () => toggleRecipe(recipeId);

    // Create the title
    const title = document.createElement('div');
    title.className = 'title';
    title.textContent = `${jsonData[(current_lang + "_title")]}`;

    // Create the arrow
    const arrow = document.createElement('div');
    arrow.className = 'arrow';
    arrow.textContent = '<';

    // Append title and arrow to the recipe bar
    recipeBar.appendChild(title);
    recipeBar.appendChild(arrow);

    // Create the recipe content section
    const recipeContent = document.createElement('section');
    recipeContent.className = 'recipe-content';

    // Create the image element
    const image = document.createElement('img');
    image.src = `${jsonData.imageUrl}`;
    image.alt = 'cocktail picture';

    // Create the div for text content
    const textContent = document.createElement('div');

    // Create the first paragraph
    const firstParagraph = document.createElement('p');
    firstParagraph.innerHTML = `${jsonData[(current_lang + "_description")]}`;
    //const recipeId = `${jsonData[(current_lang+"_description")]}`;
    //firstParagraph.innerHTML = `${jsonData.description}`;

    // Create the second paragraph with class "unhide"
    const secondParagraph = document.createElement('p');
    secondParagraph.className = 'unhide';
    secondParagraph.innerHTML = `${jsonData.recipe}`;

    // Append paragraphs to the text content div
    textContent.appendChild(image);
    textContent.appendChild(firstParagraph);
    textContent.appendChild(secondParagraph);

    // Append image and text content to the recipe content section
    //recipeContent.appendChild(image);
    recipeContent.appendChild(textContent);

    // Append recipe bar and recipe content to the recipe container
    recipeContainer.appendChild(recipeBar);
    recipeContainer.appendChild(recipeContent);

    // Append the recipe container to the body
    document.getElementById("main_list").appendChild(recipeContainer);
}

function render_list() {
    drinks_list.forEach((element) => generateRecipe(element));
    //jsonData = drinks_list[0];
    //const recipeId = `${jsonData.id}`;
    //const recipeId = `${jsonData[(current_lang+"_description")]}`;
    //console.log(recipeId);
}

function change_lang(lang) {
    current_lang = lang;
    document.getElementById("main_list").innerHTML = "";
    render_list();
}


function toggleRecipe(recipeId) {
    let arrow = document.querySelector(`#${recipeId} .arrow`);
    let content = document.querySelector(`#${recipeId} .recipe-content`);

    if (content.style.maxHeight) {
        content.style.maxHeight = null;
        arrow.innerHTML = '<';
    } else {
        content.style.maxHeight = content.scrollHeight + 'px';
        arrow.innerHTML = 'v';
    }
}

let buffer1 = '';
function unlock(character1) {
    if (character1 == 'M' && buffer1 == 'U') {
        var elems = document.getElementsByClassName("unhide");

        for (var i = 0; i < elems.length; i++) {
            var currentEl = elems[i];
            currentEl.style.display = "block";
        }

    } else {
        buffer1 = character1;
    }

}