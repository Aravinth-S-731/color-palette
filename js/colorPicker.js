// ---------- COLOR PICKER VANILLA JS ----------
let colorPicker = document.querySelector('#colorPicker');
let pickerIcon = document.getElementById('pickerIcon');
let pickerFont = document.getElementById('pickerFont');
let colorCode, hue, saturation, lightness;

var root = document.querySelector(':root');

let picker = new Picker(colorPicker);

picker.onChange = function(color) {

    // Vanilla JS Color Picker
    colorPicker.style.backgroundColor = color.rgbaString;
    colorCode = color.hslString;
    console.log(colorCode);

    // Function to get HSL Value from String
    function getHSLValues(hslColor) {
        const startIndex = hslColor.indexOf("(") + 1;
        const endIndex = hslColor.lastIndexOf(")");
        const hslValuesStr = hslColor.substring(startIndex, endIndex);

        [hue, saturation, lightness] = hslValuesStr.split(",").map((value) => parseInt(value.trim(), 10));
        return { hue, saturation, lightness };
    }

    // Call HSL function
    getHSLValues(colorCode);
    console.log(hue, saturation, lightness);

    // Send Values to css
    root.style.setProperty('--primary-h', hue);
    root.style.setProperty('--primary-s', saturation + '%');
    root.style.setProperty('--primary-l', lightness + '%');

    pickerIcon.style.filter = 'invert(1)';
    pickerFont.style.filter = 'invert(1)';
};


// ---------- RADIO TOGGLE ----------
const switcher = document.querySelector('#themeSwitcher')
const doc = document.firstElementChild

switcher.addEventListener('input', e => setTheme(e.target.value))

const setTheme = theme => doc.setAttribute('color-scheme', theme)