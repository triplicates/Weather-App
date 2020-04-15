class DisplayVersion {
    display(version) {
        let display = document.createElement('div');
        display.classList.add('version')
        display.textContent = `Version: ${version}`;
        document.body.appendChild(display)
    }
}

let version = new DisplayVersion()

module.exports = version;