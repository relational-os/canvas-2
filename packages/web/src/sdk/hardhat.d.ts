/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { ethers } from "ethers";
import {
  FactoryOptions,
  HardhatEthersHelpers as HardhatEthersHelpersBase,
} from "@nomiclabs/hardhat-ethers/types";

import * as Contracts from ".";

declare module "hardhat/types/runtime" {
  interface HardhatEthersHelpers extends HardhatEthersHelpersBase {
    getContractFactory(
      name: "Ownable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Ownable__factory>;
    getContractFactory(
      name: "ERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC20__factory>;
    getContractFactory(
      name: "ERC20Burnable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC20Burnable__factory>;
    getContractFactory(
      name: "IERC20Metadata",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20Metadata__factory>;
    getContractFactory(
      name: "IERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20__factory>;
    getContractFactory(
      name: "ERC721",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC721__factory>;
    getContractFactory(
      name: "IERC721Metadata",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC721Metadata__factory>;
    getContractFactory(
      name: "IERC721",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC721__factory>;
    getContractFactory(
      name: "IERC721Receiver",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC721Receiver__factory>;
    getContractFactory(
      name: "ERC165",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC165__factory>;
    getContractFactory(
      name: "IERC165",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC165__factory>;
    getContractFactory(
      name: "Base64",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Base64__factory>;
    getContractFactory(
      name: "TerraMasu",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.TerraMasu__factory>;
    getContractFactory(
      name: "ExquisiteLand",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ExquisiteLand__factory>;
    getContractFactory(
      name: "GenericRenderer",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.GenericRenderer__factory>;
    getContractFactory(
      name: "IBase64",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IBase64__factory>;
    getContractFactory(
      name: "IExquisiteLand",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IExquisiteLand__factory>;
    getContractFactory(
      name: "IFont",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IFont__factory>;
    getContractFactory(
      name: "ILandGranter",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ILandGranter__factory>;
    getContractFactory(
      name: "IRender",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IRender__factory>;
    getContractFactory(
      name: "ISlime",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ISlime__factory>;
    getContractFactory(
      name: "LandGranter",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.LandGranter__factory>;
    getContractFactory(
      name: "Slime",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Slime__factory>;
    getContractFactory(
      name: "SlimePools",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.SlimePools__factory>;
    getContractFactory(
      name: "TerraMasu",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.TerraMasu__factory>;
    getContractFactory(
      name: "TrustedForwarder",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.TrustedForwarder__factory>;
    getContractFactory(
      name: "TrustedForwarderRecipient",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.TrustedForwarderRecipient__factory>;
    getContractFactory(
      name: "VT323Font",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.VT323Font__factory>;

    getContractAt(
      name: "Ownable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Ownable>;
    getContractAt(
      name: "ERC20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC20>;
    getContractAt(
      name: "ERC20Burnable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC20Burnable>;
    getContractAt(
      name: "IERC20Metadata",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20Metadata>;
    getContractAt(
      name: "IERC20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20>;
    getContractAt(
      name: "ERC721",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC721>;
    getContractAt(
      name: "IERC721Metadata",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC721Metadata>;
    getContractAt(
      name: "IERC721",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC721>;
    getContractAt(
      name: "IERC721Receiver",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC721Receiver>;
    getContractAt(
      name: "ERC165",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC165>;
    getContractAt(
      name: "IERC165",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC165>;
    getContractAt(
      name: "Base64",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Base64>;
    getContractAt(
      name: "TerraMasu",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.TerraMasu>;
    getContractAt(
      name: "ExquisiteLand",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ExquisiteLand>;
    getContractAt(
      name: "GenericRenderer",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.GenericRenderer>;
    getContractAt(
      name: "IBase64",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IBase64>;
    getContractAt(
      name: "IExquisiteLand",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IExquisiteLand>;
    getContractAt(
      name: "IFont",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IFont>;
    getContractAt(
      name: "ILandGranter",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ILandGranter>;
    getContractAt(
      name: "IRender",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IRender>;
    getContractAt(
      name: "ISlime",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ISlime>;
    getContractAt(
      name: "LandGranter",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.LandGranter>;
    getContractAt(
      name: "Slime",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Slime>;
    getContractAt(
      name: "SlimePools",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.SlimePools>;
    getContractAt(
      name: "TerraMasu",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.TerraMasu>;
    getContractAt(
      name: "TrustedForwarder",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.TrustedForwarder>;
    getContractAt(
      name: "TrustedForwarderRecipient",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.TrustedForwarderRecipient>;
    getContractAt(
      name: "VT323Font",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.VT323Font>;

    // default types
    getContractFactory(
      name: string,
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<ethers.ContractFactory>;
    getContractFactory(
      abi: any[],
      bytecode: ethers.utils.BytesLike,
      signer?: ethers.Signer
    ): Promise<ethers.ContractFactory>;
    getContractAt(
      nameOrAbi: string | any[],
      address: string,
      signer?: ethers.Signer
    ): Promise<ethers.Contract>;
  }
}
