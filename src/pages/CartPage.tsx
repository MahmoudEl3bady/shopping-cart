import {IProduct} from "../components/Product";
import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import CartItems from "../components/CartItems";
const CartPage = ({
  isOpen,
  onClose,
  cartItems,
  handleRemoveItem,
  handleDecreaseQuan,
  handleIncreaseQuan,
  totalPrice,
}: {
  isOpen: boolean;
  onClose: () => void;
  cartItems: IProduct[];
  handleRemoveItem: (item: IProduct) => void;
  handleIncreaseQuan: (item: IProduct) => void;
  handleDecreaseQuan: (item: IProduct) => void;
  totalPrice:number | string;
}) => {
  return (
    <>
      <Modal
        onClose={onClose}
        scrollBehavior="inside"
        size={"3xl"}
        isOpen={isOpen}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <h1 className="text-2xl font-bold">Your Cart</h1>
            <h2 className="text-end">
              Total : <span className="text-slate-500">${totalPrice}</span>
            </h2>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <CartItems
              cartItems={cartItems}
              handleRemoveItem={handleRemoveItem}
              handleDecreaseQuan={handleDecreaseQuan}
              handleIncreaseQuan={handleIncreaseQuan}
            />
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default CartPage;
