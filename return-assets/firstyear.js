// Applies the first-year yearly discount (code FIRSTYEAR, $50 off the first
// yearly payment) automatically when someone picks the yearly plan on /join.
(function () {
  var busy = false;
  function setVal(el, v) {
    var s = Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, 'value').set;
    s.call(el, v);
    el.dispatchEvent(new Event('input', { bubbles: true }));
  }
  function applied() { return /Coupon code applied/i.test(document.body.innerText); }
  function yearly() {
    var r = Array.prototype.find.call(document.querySelectorAll('input[type=radio]'), function (x) {
      var l = x.closest('label') || x.parentElement.parentElement;
      return /Yearly/.test((l && l.innerText) || '');
    });
    return r && r.checked;
  }
  function tryApply() {
    if (busy || applied() || !yearly()) return;
    busy = true;
    var link = Array.prototype.find.call(document.querySelectorAll('button,a,span'), function (b) {
      return /Have a coupon code/i.test(b.innerText);
    });
    if (link) link.click();
    setTimeout(function () {
      var inp = document.querySelector('input[placeholder*="oupon"]');
      if (!inp) { busy = false; return; }
      setVal(inp, 'FIRSTYEAR');
      setTimeout(function () {
        var ap = Array.prototype.find.call(document.querySelectorAll('button'), function (b) {
          return /^\s*Apply\s*$/i.test(b.innerText);
        });
        if (ap) ap.click();
        busy = false;
      }, 400);
    }, 500);
  }
  setInterval(tryApply, 1000);
})();
