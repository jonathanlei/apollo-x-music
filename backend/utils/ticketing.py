import os.path as osp
import qrcode
from qrcode.image.pil import PilImage
import numpy as np
import cv2
from typing import Tuple, Dict, Union

TICKETS_FOLDER_PATH = osp.join(osp.dirname(__file__), 'tickets')
print(cv2.__version__)


def _generate_QRcode(data: str) -> PilImage:
    qr = qrcode.QRCode(
        version=1,
        error_correction=qrcode.constants.ERROR_CORRECT_L,
        box_size=10,
        border=4,
    )
    qr.add_data(data)
    
    qr.make(fit = True)
    qr_img = qr.make_image(fill_color = 'black',
                        back_color = 'white')

    return qr_img


def _save_QRcode(qr_img: PilImage, outpath: str) -> None:
    qr_img.save(outpath)

    return


def generate_QRcode_ticket(
                        NFT_contract_address: str, 
                        NFT_token_id: int, 
                        wallet_address: str, 
                        nonce: int
                        ) -> Tuple[PilImage, str]:
    ticket_info = f"{NFT_contract_address}_{NFT_token_id}_{wallet_address}_{nonce}" # TODO: is there a better way for encoding?
    ticket_QRcode = _generate_QRcode(ticket_info)

    ticket_QRcode_outpath = osp.join(TICKETS_FOLDER_PATH, f"{ticket_info}.jpg")
    _save_QRcode(ticket_QRcode, ticket_QRcode_outpath)

    return ticket_QRcode, ticket_info, ticket_QRcode_outpath


def _read_QRcode(qr_img_path: str) -> Tuple[str, np.ndarray]:
    img = cv2.imread(qr_img_path)
    qrCodeDetector = cv2.QRCodeDetector()
    decodedText, points, _ = qrCodeDetector.detectAndDecode(img)

    # cv2.imshow("Image", img)
    # cv2.waitKey(0)
    # cv2.destroyAllWindows()
    
    return decodedText, points


def read_QRcode_ticket(qr_img_path: str) -> Union[Dict, None]:
    decodedText, points = _read_QRcode(qr_img_path)
    
    if points is not None:
        NFT_contract_address, NFT_token_id, wallet_address, nonce = decodedText.split('_')
        NFT_token_id, nonce = int(NFT_token_id), int(nonce)

        ticket_info = {
                'NFT_contract_address': NFT_contract_address, 
                'NFT_token_id': NFT_token_id, 
                'wallet_address': wallet_address, 
                'nonce': nonce
            }

        return ticket_info
    else:
        return None


if __name__ == '__main__':
    ticket_QRcode, ticket_info, ticket_QRcode_outpath = generate_QRcode_ticket(
                                                                '0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D',
                                                                8520,
                                                                '0x35fFc9D554465e0dE7a71d7285ad8b4EC447bde2',
                                                                12
                                                                )
    ticket_info = read_QRcode_ticket(ticket_QRcode_outpath)
    print(f'ticket info = {ticket_info}')

