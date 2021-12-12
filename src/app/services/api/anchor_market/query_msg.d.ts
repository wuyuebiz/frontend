/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export type QueryMsg =
  | {
      config: {
        [k: string]: unknown;
      };
    }
  | {
      state: {
        block_height?: number | null;
        [k: string]: unknown;
      };
    }
  | {
      epoch_state: {
        block_height?: number | null;
        distributed_interest?: Uint256 | null;
        [k: string]: unknown;
      };
    }
  | {
      borrower_info: {
        block_height?: number | null;
        borrower: string;
        [k: string]: unknown;
      };
    }
  | {
      borrower_infos: {
        limit?: number | null;
        start_after?: string | null;
        [k: string]: unknown;
      };
    };
export type Uint256 = string;
