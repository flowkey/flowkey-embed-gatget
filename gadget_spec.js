/* global describe, it, expect, educreationsGadget */

(function() {
  describe('educreationsGadget', function() {
    it('shows "Please specify the embed code" if no embed code is given', function(done) {
      window.postMessage({event: 'attributesChanged', data: {}}, '*');

      setTimeout(function() {
        chai.expect(document.body.textContent).to.contain("Please specify the embed code");
        done();
      }, 100);
    });

    it('embeds educreations embed codes', function(done) {
      window.postMessage({event: 'attributesChanged', data: {embedCode: "<iframe width=\"480\" height=\"300\" src=\"https://www.educreations.com/lesson/embed/444280/\" frameborder=\"0\" webkitAllowFullScreen mozallowfullscreen allowfullscreen></iframe>"}}, '*');

      setTimeout(function() {
        chai.expect(document.body.innerHTML).to.contain("<iframe");
        done();
      }, 100);
    });

    it('doesnt embed other embed codes', function(done) {
      window.postMessage({event: 'attributesChanged', data: {embedCode: "<iframe width=\"480\" height=\"300\" src=\"https://www.foo.com/444280/\" frameborder=\"0\" webkitAllowFullScreen mozallowfullscreen allowfullscreen></iframe>"}}, '*');

      setTimeout(function() {
        chai.expect(document.body.textContent).to.contain("Please specify the embed code");
        done();
      }, 100);
    });
  });
})();
