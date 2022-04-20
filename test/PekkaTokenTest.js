const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Pekka token", function () {
  it("Should return the owner of token", async function () {
    const [owner] = await ethers.getSigners();
    const PekkaToken = await ethers.getContractFactory("PekkaToken");
    const pekkaToken = await PekkaToken.deploy();
    await pekkaToken.deployed();
    const owneraddress= await pekkaToken.owner();

    expect(owneraddress).to.equal(owner.address);
  });
});
