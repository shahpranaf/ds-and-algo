// testRunner.js

let passed = 0;
let failed = 0;
let testIndex = 1;

/**
 * Runs a single test case with a label.
 * @param {string} description - What you're testing.
 * @param {Function} fn - The test logic (should throw if it fails).
 */
function runTest(description, fn) {
  try {
    fn();
    console.log(`✅ Test ${testIndex++}: ${description}`);
    passed++;
  } catch (err) {
    console.error(`❌ Test ${testIndex++}: ${description}`);
    console.error(`   ↳ ${err.message}`);
    failed++;
  }
}

/**
 * Runs a test case expecting an error to be thrown.
 * @param {string} description - What you're testing.
 * @param {Function} fn - The test logic expected to throw.
 */
function runTestShouldThrow(description, fn) {
  try {
    fn();
    console.error(`❌ Test ${testIndex++}: ${description}`);
    console.error(`   ↳ Expected error but none was thrown.`);
    failed++;
  } catch (err) {
    console.log(`✅ Test ${testIndex++}: ${description}`);
    passed++;
  }
}

/**
 * Prints the summary of tests.
 */
function testSummary() {
  console.log("\n--- 🧾 Test Summary ---");
  console.log(`✅ Passed: ${passed}`);
  console.log(`❌ Failed: ${failed}`);
  console.log('📦 Total :', passed + failed);
}

// Reset function if you're running in loops or multi-files
function resetTests() {
  passed = 0;
  failed = 0;
  testIndex = 1;
}

module.exports = {
  runTest,
  runTestShouldThrow,
  testSummary,
  resetTests
};
