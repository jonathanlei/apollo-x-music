import os.path as osp
import qrcode
from qrcode.image.pil import PilImage
from typing import Tuple

TICKETS_FOLDER_PATH = osp.join(osp.dirname(__file__), 'tickets')


def generate_QRcode(data) -> PilImage:
    # Creating an instance of QRCode class
    qr = qrcode.QRCode(version = 1,
                    box_size = 10,
                    border = 5)
    
    # Adding data to the instance 'qr'
    qr.add_data(data)
    
    qr.make(fit = True)
    qr_img = qr.make_image(fill_color = 'black',
                        back_color = 'white')

    return qr_img


def save_QRcode(qr_img: PilImage, outpath: str) -> None:
    qr_img.save(outpath)

    return


def generate_QRcode_ticket(
                        NFT_contract_address: str, 
                        NFT_token_id: int, 
                        wallet_address: str, 
                        nonce: int
                        ) -> Tuple[PilImage, str]:
    ticket_info = f"{NFT_contract_address}_{NFT_token_id}_{wallet_address}_{nonce}" # TODO: is there a better way for encoding?
    ticket_QRcode = generate_QRcode(ticket_info)

    ticket_QRcode_outpath = osp.join(TICKETS_FOLDER_PATH, f"{ticket_info}.jpg")
    save_QRcode(ticket_QRcode, ticket_QRcode_outpath)

    return ticket_QRcode, ticket_info


if __name__ == '__main__':
    ticket_QRcode, ticket_info = generate_QRcode_ticket(
                                '0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D',
                                8520,
                                '0x35fFc9D554465e0dE7a71d7285ad8b4EC447bde2',
                                12
                                )
    print(f'Ticket Info: {ticket_info}')
    

