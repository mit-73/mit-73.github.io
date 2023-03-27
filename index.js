const text = `
<span id="a">mit@mit-73.github.io</span>:<span id="b">~</span><span id="c">$</span> uname -a
Ilnar Miftakhutdinov earth MiT Kernel Version 4.2.6: Sat Apr 19 17:32:47 PST 2019

<span id="a">mit@mit-73.github.io</span>:<span id="b">~</span><span id="c">$</span> who
admin&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;ttyp0&emsp;&emsp;Jan 01 00:01 (root)
developer&emsp;&emsp;&emsp;&emsp;ttyp2&emsp;&emsp;Nov 30 ??:?? (mit)

<span id="a">mit@mit-73.github.io</span>:<span id="b">~</span><span id="c">$</span> sudo -s
<span id="root">root@mit-73.github.io</span>:<span id="b">~</span><span id="c">#</span> cd about
<span id="root">root@mit-73.github.io</span>:<span id="b">~/about</span><span id="c">#</span> cat job.txt
Current job: 
- Lead Flutter Developer at <a href="https://mts-digital.ru/" target="_blank" rel="noopener noreferrer">MTS Digital</a> (March 2023 – today)

Work history:
- Lead Flutter Developer at <a href="https://madbrains.ru/" target="_blank" rel="noopener noreferrer">Mad Brains</a> (July 2021 – March 2023)
- Flutter Developer at <a href="https://madbrains.ru/" target="_blank" rel="noopener noreferrer">Mad Brains</a> (March 2020 – July 2021)

<span id="root">root@mit-73.github.io</span>:<span id="b">~/about</span><span id="c">#</span> cat about-me.txt
📧 [🇺🇸/🇷🇺] <a href="mailto:ilnar.miftakhutdinov@gmail.com">ilnar.miftakhutdinov@gmail.com</a>
📲 [🇺🇸/🇷🇺] <a href="https://t.me/mit_73" target="_blank" rel="noopener noreferrer"><span>https://t.me/mit_73</span></a>
💼 [🇺🇸/🇷🇺] <a href="https://www.linkedin.com/in/mit73/" target="_blank" rel="noopener noreferrer"><span>https://www.linkedin.com/in/mit73/</span></a>
🎓 [🇷🇺] <a href="https://ru.stackoverflow.com/users/261617/mit" target="_blank" rel="noopener noreferrer"><span>https://ru.stackoverflow.com/users/261617/mit</span></a>
👨‍💻 [🇺🇸/🇷🇺] <a href="https://github.com/mit-73" target="_blank" rel="noopener noreferrer"><span>https://github.com/mit-73</span></a>
👨‍💻 [🇺🇸] <a href="https://codepen.io/MiT-73" target="_blank" rel="noopener noreferrer"><span>https://codepen.io/MiT-73</span></a>
📝 [🇺🇸/🇷🇺] <span id="root"># TODO: create Blog</span>

I don't divide people into good and bad. I condemn the culture of cancellation.

Currently a <strong>Dart & Flutter Engineer</strong>, familiar with Swift, Kotlin, .NET/C#, SQL/NoSQL, Docker, CI/CD, Fastlane.

I like to go to conferences.

<span id="root">root@mit-73.github.io</span>:<span id="b">~/about</span><span id="c">#</span>
<span id="a">mit@mit-73.github.io</span>:<span id="b">~</span><span id="c">$</span> _`;

class Typer {
  constructor({ selector, speed } = { selector: "#console", speed: 3 }) {
    this.console = document.querySelector(selector);
    this.speed = speed;
    this._text = text;
    this._index = 0;

    this.init();
  }

  async init() {
    const timer = setInterval(() => {
      this.addText();
      this._index > this._text.length && clearInterval(timer);
    }, 15);

    this.stripHtml(this._text);
  }

  content() {
    return this.console.innerHTML;
  }

  write(str) {
    this.console.innerHTML += str;
  }

  addText() {
    if (!this._text) return;

    if (this.content().slice(-1) === "|")
      this.console.innerHTML = this.content().slice(0, -1);

    this._index += this.speed;

    this.console.innerHTML = this._text.slice(0, this._index).replace(/\n/g, "<br/>");
    window.scrollBy(0, 50);
  }

  stripHtml(html) {
    let tmp = document.createElement("DIV");
    tmp.innerHTML = html;
    console.log(tmp.textContent || tmp.innerText);
  }
}

window.typer = new Typer({
  selector: "#console",
  speed: 10,
  file: "about-me.txt"
});