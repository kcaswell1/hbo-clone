import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import MainLayout from '../components/layout/MainLayout'
import FeaturedMedia from '../components/UI/FeaturedMedia/FeaturedMedia'
import ForYouList from '../components/UI/ForYouList/ForYouList'
import JustAdded from '../components/UI/JustAdded/JustAdded'
import PosterView from '../components/UI/PosterView/PosterView'
import CastInfo from '../components/UI/CastInfo/CastInfo'

export default function MovieView() {
  return (
    <MainLayout>
      <FeaturedMedia />
      <PosterView />
      <CastInfo />
    </MainLayout>
  )
}