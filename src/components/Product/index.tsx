import React from 'react'

import tshirtImage from '../../assets/tshirt.png'
import ProductAction from '../ProductAction'
import SellerInfo from '../SellerInfo'

import {
  Container,
  Row,
  Panel,
  Column,
  Gallery,
  Section,
  Description
} from './styles'

const Product: React.FC = () => {
  return (
    <Container>
      <Row>
        <a href="#">Compatilhar</a>
        <a href="#">Vender um igual</a>
      </Row>

      <Panel>
        <Column>
          <Gallery>
            <img alt="T-Shirt" src={tshirtImage} />
          </Gallery>

          <Info />
        </Column>

        <Column>
          <ProductAction />
          <SellerInfo />

          <WarrantySection />
          <WarrantySection />
          <WarrantySection />
        </Column>
      </Panel>
    </Container>
  )
}

const WarrantySection = () => (
  <Section>
    <h4>Garantia</h4>

    <div>
      <span>
        <p className="title">Compra garantida com o Lorem Ipsum</p>
        <p className="description">
          Receba o procuro que está esperando ou devolvemos o seu dinheiro
        </p>
      </span>

      <span>
        <p className="title">Garantia do vendedor</p>
        <p className="description">Sem garantia</p>
      </span>
    </div>

    <a href="#">Saiba mais sobre garantia</a>
  </Section>
)

const Info = () => (
  <Description>
    <h2>Descrição</h2>

    <p>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
      adipisci reiciendis mollitia unde accusamus magni doloremque rerum cum
      quam? Deserunt eum quisquam excepturi sapiente? Quaerat fuga consequuntur
      dolores eligendi! Quia.
    </p>
  </Description>
)

export default Product
