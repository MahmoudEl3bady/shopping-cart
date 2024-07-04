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
}: {
  isOpen: boolean;
  onClose: () => void;
  cartItems: IProduct[];
}) => {
  return (
    <>
      <Modal onClose={onClose} scrollBehavior="inside" size={"3xl"} isOpen={isOpen}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Your Cart</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <CartItems cartItems={cartItems} />
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
