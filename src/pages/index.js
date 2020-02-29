import React from 'react'

import Layout from '../components/layout/layout'
import Image from '../components/image/image'
import SEO from '../components/seo/seo'

import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Divider from '@material-ui/core/Divider'
import ListSubheader from '@material-ui/core/ListSubheader'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import Collapse from '@material-ui/core/Collapse'

import StarIcon from '@material-ui/icons/Star'
import InfoIcon from '@material-ui/icons/Info'
import ExpandLess from '@material-ui/icons/ExpandLess'
import ExpandMore from '@material-ui/icons/ExpandMore'
import Done from '@material-ui/icons/Done'

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}))

const IndexPage = () => {
  const classes = useStyles()
  const [features, setFeatures] = React.useState(true)
  const [info, setInfo] = React.useState(true)

  function handleClick(id) {
    switch (id) {
      case 'features':
        setFeatures(!features)
        break
      case 'info':
        setInfo(!info)
        break
    }
  }

  return (
    <Layout>
      <SEO title="Home" />
      <Grid container spacing={3} justify="center">
        <Grid item xs={2}>
          <div style={{ maxWidth: `100px`, marginBottom: `1.45rem` }}>
            <Image />
          </div>
        </Grid>
        <Grid item xs={8}>
          <h1>Gatsby Material UI Starter</h1>
          <h5>
            A responsive, minimalist Gatsby starter based on the world's most
            popular React UI framework.
          </h5>
        </Grid>
        <Grid item xs={10}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris quis
            efficitur ante. Sed euismod elit a turpis facilisis, a accumsan nisl
            blandit. Nam bibendum ex ipsum, et pulvinar dolor consectetur a. Sed
            a elit neque. Nullam interdum consectetur dictum. Donec sodales
            lacinia turpis eu consequat. Praesent ac sollicitudin lorem. In hac
            habitasse platea dictumst. Nunc vestibulum libero et elementum
            auctor. Maecenas et faucibus ante. Nunc tincidunt, mi quis fringilla
            tempus, ante libero vulputate urna, elementum iaculis tellus libero
            elementum augue. Etiam aliquam ullamcorper ultricies. Curabitur
            ornare tristique tortor, vel sollicitudin metus faucibus ut. Sed
            volutpat enim lacinia, varius orci vitae, scelerisque nulla. Vivamus
            quis consectetur eros, sed aliquet orci.
          </p>
          <p>
            Integer egestas ac orci sit amet pharetra. In vel quam sapien.
            Pellentesque habitant morbi tristique senectus et netus et malesuada
            fames ac turpis egestas. Nullam tristique, risus ornare hendrerit
            semper, nisl mi pellentesque felis, et interdum libero risus id
            dolor. Proin elementum lectus quis orci dapibus, sed lobortis arcu
            volutpat. Fusce in porta odio. Sed varius, purus sed lobortis
            interdum, enim diam sodales erat, nec suscipit ex tortor id magna.
          </p>
          <p>
            Vivamus ullamcorper euismod ex, eget volutpat ex imperdiet non.
            Proin lorem dolor, convallis non varius a, eleifend eu mi. Nulla
            facilisis, magna sit amet sodales pellentesque, diam orci tincidunt
            odio, ut gravida dolor metus eget turpis. Maecenas in lorem
            fringilla, porta nulla quis, suscipit risus. Vivamus vel auctor
            orci, sit amet ullamcorper nisl. Nulla commodo, dui non rhoncus
            venenatis, nibh eros elementum orci, molestie vestibulum lacus quam
            eu metus. Praesent hendrerit fermentum nisi. Phasellus et facilisis
            lorem, quis convallis augue. Quisque ac nibh quis nibh maximus
            mattis. In suscipit nec sem in ornare. Curabitur nisl erat, pharetra
            ut scelerisque eget, imperdiet id erat. Sed accumsan mattis leo
            vitae feugiat. Nunc eget accumsan arcu. Nullam maximus dui vitae
            efficitur rhoncus. Nam vitae magna finibus, aliquet ipsum nec,
            blandit lacus.
          </p>
        </Grid>
      </Grid>
      <Divider />
      <List component="nav" className={classes.root}>
        <ListItem id="features" button onClick={() => handleClick('features')}>
          <ListItemIcon>
            <StarIcon />
          </ListItemIcon>
          <ListItemText primary="Features" />
          {features ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={!features} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button className={classes.nested}>
              <ListItemIcon>
                <Done />
              </ListItemIcon>
              <ListItemText primary="Material UI Framework" />
            </ListItem>
            <ListItem button className={classes.nested}>
              <ListItemIcon>
                <Done />
              </ListItemIcon>
              <ListItemText primary="Progressive Web App" />
            </ListItem>
            <ListItem button className={classes.nested}>
              <ListItemIcon>
                <Done />
              </ListItemIcon>
              <ListItemText primary="SEO" />
            </ListItem>
            <ListItem button className={classes.nested}>
              <ListItemIcon>
                <Done />
              </ListItemIcon>
              <ListItemText primary="Offline Support" />
            </ListItem>
            <ListItem button className={classes.nested}>
              <ListItemIcon>
                <Done />
              </ListItemIcon>
              <ListItemText primary="Roboto Typeface (self hosted)" />
            </ListItem>
          </List>
        </Collapse>
        <ListItem button onClick={() => handleClick('info')}>
          <ListItemIcon>
            <InfoIcon />
          </ListItemIcon>
          <ListItemText primary="Info" />
          {info ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={!info} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button className={classes.nested}>
              <ListItemIcon>
                <Done />
              </ListItemIcon>
              <ListItemText primary="Based on Gatsby Default Starter" />
            </ListItem>
            <ListItem button className={classes.nested}>
              <ListItemIcon>
                <Done />
              </ListItemIcon>
              <ListItemText primary="Uses Gatsby Material UI Plugin" />
            </ListItem>
          </List>
        </Collapse>
      </List>
    </Layout>
  )
}

export default IndexPage
