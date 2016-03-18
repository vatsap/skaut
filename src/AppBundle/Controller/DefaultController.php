<?php

namespace AppBundle\Controller;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;

class DefaultController extends Controller
{
    public function homepageAction(Request $request)
    {
        return $this->render('index.html.twig');
    }

    public function troopAction(Request $request)
    {
        return $this->render('troop.html.twig');
    }

    public function eventsAction(Request $request)
    {
        return $this->render('events.html.twig');
    }

    public function galleryAction(Request $request)
    {
        return $this->render('gallery.html.twig');
    }

    public function contactsAction(Request $request)
    {
        return $this->render('contacts.html.twig');
    }

    public function downloadAction(Request $request)
    {
        return $this->render('download.html.twig');
    }

    public function linksAction(Request $request)
    {
        return $this->render('links.html.twig');
    }
}
