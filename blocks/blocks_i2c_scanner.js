Blockly.Blocks["i2c_scanner_begin"] = {
  init: function () {
      this.appendDummyInput()
          .appendField("Begin scanner")
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(210);
      this.setTooltip("");
      this.setHelpUrl("");
  }
};


Blockly.Blocks["i2c_scanner_scan"] = {
  init: function () {
      this.appendDummyInput()
          .appendField("Scan devices")
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(210);
      this.setTooltip("");
      this.setHelpUrl("");
  }
};
